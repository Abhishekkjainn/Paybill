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
        <div className="registerbuttonpage1">
          Register as Vendor{' '}
          <img
            src="/arrow-down-blue.png"
            alt="Arrow"
            className="regbuttonpage1"
          />
        </div>
        <div className="checkbillsbutton">Check Your Bills</div>
      </div>
    </div>
  );
}
