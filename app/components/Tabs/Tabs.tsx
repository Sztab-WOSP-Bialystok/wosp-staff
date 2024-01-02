import { Tab, Tabs } from "../../bootstrap";
import { TabElement } from "./types";

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
            <CardBody> */}
              {tabEl.content}
              {/* </CardBody>
          </Card> */}
        </Tab>
      ))}
    </Tabs>
  );
};

export default StyledTabs;
