import OperationsList from "./OperationsList";


function Operation() {
  return (
    <section className="section" id="section--2">
      <div className="section__title">
        <h2 className="section__description">Operations</h2>
        <h3 className="section__header">
          Everything as simple as possible, but no simpler.
        </h3>
      </div>

      <div className="operations">
        <div className="operations__tab-container">
          <button
            className="btn operations__tab operations__tab--1 operations__tab--active"
            data-tab="1"
          >
            <span>01</span>Instant Transfers
          </button>
          <button
            className="btn operations__tab operations__tab--2"
            data-tab="2"
          >
            <span>02</span>Instant Loans
          </button>
          <button
            className="btn operations__tab operations__tab--3"
            data-tab="3"
          >
            <span>03</span>Instant Closing
          </button>
        </div>
        <OperationsList></OperationsList>
      </div>
    </section>
  );
}

export default Operation;
