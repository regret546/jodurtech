const Contact = () => {
  return (
    <div className=" md:w-[60%] w-[80%]  mb-5 grid gap-4">
      <h2 className="font-extrabold text-[3.5rem] text-center w-full text-accent-blue">
        Contact.
      </h2>
      <p className="text-center">
        Shoot me an email if you want to connect! You can also find me on{" "}
        <span className="text-accent-blue font-medium cursor-pointer">
          Linkedin
        </span>{" "}
        or{" "}
        <span className="text-accent-blue font-medium cursor-pointer">
          Facebook
        </span>{" "}
        if that's more your speed.
      </p>
    </div>
  );
};

export default Contact;
