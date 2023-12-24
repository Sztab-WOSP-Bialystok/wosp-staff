import { TabElement } from "./types";
import { Tabs, Tab, Card } from "react-bootstrap";

type Props = {
  tabs: TabElement[];
  initialTab?: string;
};

const StyledTabs = ({ tabs, initialTab }: Props) => {
  return (
    <Tabs defaultActiveKey={initialTab ?? tabs[0].id}>
      {tabs.map((tabEl) => (
        <Tab
          key={tabEl.id}
          eventKey={tabEl.id}
          title={tabEl.name}
        >
          {/* <Card style={{ borderTop: "none", borderRadius: '0 2px 2px 2px' }}>
            <Card.Body> */}
              {tabEl.content}
              {/* </Card.Body>
          </Card> */}
        </Tab>
      ))}
    </Tabs>
  );
};

export default StyledTabs;
