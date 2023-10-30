import { TabElement } from "./types";
import { Tabs, Tab } from "react-bootstrap";

type Props = {
	tabs: TabElement[];
	initialTab?: string;
};

const StyledTabs = ({ tabs, initialTab }: Props) => {
	return (
		<Tabs
			defaultActiveKey={initialTab ?? tabs[0].id}
		>
            {tabs.map(tabEl =>(
            <Tab key={tabEl.id} eventKey={tabEl.id} title={tabEl.name}>{tabEl.content}</Tab>
            )
            )}
		</Tabs>
	);
};

export default StyledTabs
