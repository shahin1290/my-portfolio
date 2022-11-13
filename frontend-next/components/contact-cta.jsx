import Link from "next/link";

const ContactCta = () => {
  return (
    <div className="contact-cta">
      <h2 className="contact-cta__headline">
        Interested in doing a project together?
      </h2>
      <hr className="contact-cta__rule" />
      <Link href="/contact">
        <span className="button contact-cta__button">Contact Me</span>
      </Link>
    </div>
  );
};

export default ContactCta;