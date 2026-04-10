import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from './firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = "kensooly@gmail.com";
const password = "@myks695400";

async function createAdmin() {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Admin user created successfully:", userCredential.user.email);
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log("Admin user already exists.");
    } else {
      console.error("Error creating admin user:", error.message);
    }
  }
}

createAdmin().then(() => process.exit(0));
