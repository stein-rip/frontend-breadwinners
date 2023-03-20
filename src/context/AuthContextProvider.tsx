import { ReactNode, useContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import Profile from "../models/Profile";
import { getProfile } from "../services/ProfileService";
import { useNavigate } from "react-router-dom";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  useEffect(() => {
    // useEffect to only register once at start
    return auth.onAuthStateChanged(async (newUser) => {
      setUser(newUser);
      console.log(newUser);
      if (newUser) {
        const profile = await getProfile(newUser.uid);
        if (profile) {
          console.log(profile);
          setProfile(profile);

          // const params = {
          //   query: profile.query,

          //   ...(profile.job_is_remote
          //     ? { remote_jobs_only: profile.job_is_remote }
          //     : {}),
          //   ...(profile.job_employment_type
          //     ? { employment_types: profile.job_employment_type }
          //     : {}),
          //   ...(profile.experience_level
          //     ? { job_requirements: profile.experience_level }
          //     : {}),
          // };
          // navigate(`/?${new URLSearchParams(params as any)}`);
        }
      } else {
        setProfile(null);
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, profile }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
