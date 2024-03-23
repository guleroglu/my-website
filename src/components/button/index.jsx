import PropTypes from "prop-types";

export default function Button({ href, children, target }) {
  return (
    <a href={href} target={target}>
      {children}
    </a>
  );
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
};
