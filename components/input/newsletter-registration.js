import classes from "./newsletter-registration.module.css";
import { useRef, useContext } from "react";
import NotificationContext from "../../store/notification-context";

function NewsletterRegistration() {
  const emailInputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    notificationCtx.showNotification({
      title: "signing up",
      message: "Registering for newsletter",
      status: "pending"
    }); 


    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: emailInputRef.current.value }),
      headers: {
        "Content-Type": "appplications/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("an error occured");  
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "signing up completed",
          message: "Registering for newsletter - completed",
          status: "success"
        }); 
      }).catch((error) => {
        notificationCtx.showNotification({
          title: "Error",
          message: "something went wrong",
          status: "error"
        });
      })
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
