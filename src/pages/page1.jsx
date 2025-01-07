import { Link } from 'react-router-dom';
export default function Page1() {
  return (
    <div className="page1">
      <div className="tag"></div>
      <div className="page1head">
        Billing Made{' '}
        <span className="italics blue">
          <i> Smart</i>
        </span>{' '}
        and Simple.
      </div>
      <div className="page1subhead">
        Empowering businesses with hassle-free invoicing solutions.
      </div>
      <div className="buttonspage1">
        <Link to={'/register'} className="registerbuttonpage1 linktag">
          Register as Vendor{' '}
          <img
            src="/arrow-down-blue.png"
            alt="Arrow"
            className="regbuttonpage1"
          />
        </Link>
        <Link to={'/viewbills'} className="checkbillsbutton linktag">
          Check Your Bills
        </Link>
      </div>
    </div>
  );
}
