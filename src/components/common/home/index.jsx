import { useEffect, useState } from "react";
import AuthAPI from "../../../api/AuthApi";

function HomePage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const reponse = await AuthAPI.getUser();

        if (!reponse.status.valueOf() === 200) {
          console.log("Error in fetch user", reponse);
          return;
        }

        setUser(reponse.data);
      } catch (error) {
        console.log("Error in fetch user", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>HomePage</h1>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
    </div>
  );
}

HomePage.propTypes = {};

export default HomePage;
