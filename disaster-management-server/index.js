require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const stripe = require("stripe")(process.env.PAYMENT_SECRET);
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  // console.log(authorization);
  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "unauthorized access" });
  }
  // bearer token
  const token = authorization.split(" ")[1];
  // console.log(token);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    // console.log(decoded);
    if (err) {
      // console.log(err);
      return res
        .status(401)
        .send({ error: true, message: "unauthorized access" });
    }
    req.decoded = decoded;
    next();
  });
};

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qwbvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    const allUsers = client.db("disaster-management").collection("users");
    const donations = client.db("disaster-management").collection("donations");
    const crises = client.db("disaster-management").collection("crises");

    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.TOKEN_SECRET, {
        expiresIn: "2h",
      });

      res.send({ token });
    });

    app.get("/users", async (req, res) => {
      const result = await allUsers.find({ role: "volunteer" }).toArray();
      res.send(result);
    });

    app.get("/role", verifyJWT, async (req, res) => {
      const email = req.query?.email;
      // console.log(email);
      const role = await allUsers.findOne({ email: email });
      if (role) {
        res.send(role);
      } else {
        res.send({});
      }
    });
    
    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await allUsers.findOne(query);
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      // console.log(user);
      const existingUser = await allUsers.findOne(query);

      if (existingUser) {
        return res.send({ message: "user already exists" });
      }

      const result = await allUsers.insertOne(user);
      res.send(result);
    });

    app.put("/users/:id", async (req, res) => {
      const id = req.params.id;
      const body = req.body;
      const quary = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: body,
      };
      const result = await allUsers.updateOne(quary, updateDoc, options);
      res.send(result);
    });

    //all crises
    app.get("/crises", async (req, res) => {
      const result = await crises.find({}).toArray();
      res.send(result);
    })
    app.post('/crises', async (req, res) => {
      const body = req.body;
      const result = await crises.insertOne(body);
      res.send(result);
    });

    // put
    app.put("/crises/:id", async (req, res) => {
      const id = req.params.id;
      const quary = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          status: 'approve',
        },
      };
      const result = await crises.updateOne(quary, updateDoc, options);
      res.send(result);
    })
    // approved crises
    app.get("/approveCrises", async (req, res) => {
      const query = { status: "approve" };
      const result = await crises.find(query).toArray();
      res.send(result);
    });

    // donations
    app.post("/donations", async (req, res) => {
      const body = req.body;
      const result = await donations.insertOne(body);
      res.send(result);
    });

    // donations
    app.get("/donations", async (req, res) => {
      const result = await donations.find({}).toArray();
      res.send(result);
    });
    //commit
    app.get("/volunteers", async (req, res) => {
      const query = { role: "volunteer" };
      const result = await allUsers
        .find(query)
        .sort({ enroll: -1 })
        .limit(6)
        .toArray();
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello disaster-management Hub!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
