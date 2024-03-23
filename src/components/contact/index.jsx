import PropTypes from "prop-types";

export default function Contact({ children, href, target }) {
  return (
    <a
      className="py-2 px-4 hover:bg-[#27272A] rounded-md text-sm"
      target={target}
      href={href}
    >
      {children}
    </a>
  );
}

Contact.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
};
