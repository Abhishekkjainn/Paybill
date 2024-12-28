import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
export default function Page5() {
  return (
    <div className="page3">
      {/* Section Tagline */}
      <div className="page3tag">
        <div className="circle-small"></div>
        <div className="tagname">Have a Question?</div>
      </div>

      {/* Section Header */}
      <div className="page3head page5head">
        Frequently Asked <br />
        <span className="italics blue">
          <i> Questions.</i>
        </span>
      </div>
      <Accordion className="accordionmain">
        <AccordionItem className="accordionitem">
          <AccordionItemHeading className="accordionitemheading">
            <AccordionItemButton>
              What is this platform for?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Our platform helps you easily generate bills for your customers by
              adding purchased items, calculating totals, and sending the final
              invoice via SMS. It's a simple and efficient way to manage billing
              without the need for payment processing integration.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Who can use this platform?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              This platform is ideal for businesses that need to generate and
              send digital bills, such as retailers, service providers, or any
              business that deals with customer transactions and requires
              invoice generation.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How do I manage inventory on this platform?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              The platform allows you to add and manage your inventory by
              entering product details such as Item ID, name, price,
              description, and quantity. You can easily keep track of all items
              and use them to generate bills.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How do I add items to my inventory?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To add items, go to your inventory management section, enter the
              Item ID, name, description, price, and quantity. The platform will
              store this information for use when generating bills.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can I update the details of an item in my inventory?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, you can update the details of any item in your inventory.
              Simply edit the Item ID, name, description, price, or quantity as
              needed. The changes will be reflected in future billings.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>How do I generate a bill?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To generate a bill, select the items your customer has purchased,
              enter their quantities, and the platform will calculate the total
              amount. You'll also need to provide an invoice number. Once
              everything is correct, generate the bill.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How do I send the bill to the customer?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              After generating the bill and adding the invoice number, click the
              "Send" button. The platform will automatically send the bill via
              SMS to the customer's phone number.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can I customize the items in my bill?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, you can fully customize the items in your bill by selecting
              products from your inventory. You can add multiple items, adjust
              quantities, and update any details before finalizing the bill.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Is there a limit to how many items I can add to a bill?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              There is no limit to the number of items you can add to a bill.
              You can add as many items as needed from your inventory, and the
              platform will calculate the total accordingly.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How do I track previous bills?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You can easily track all previously generated bills from your
              dashboard. The platform keeps a record of all bills, including the
              invoice numbers, amounts, and customer details.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
