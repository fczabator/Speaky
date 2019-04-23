import * as React from 'react';
import {Screen} from '../components/Screen';
import {Card, Text} from 'rebass';
import {BottomPanel} from '../components/BottomPanel';
import {getTopics} from '../lib/firebase';

const loremIpsum = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
`;

type Topic = {
  content: string;
};

const fetchTopics = async (setTopics: (topics: Topic[]) => void) => {
  const result = await getTopics();
  const {docs} = result;
  const topics = docs.map(doc => doc.data()) as Topic[];
  setTopics(topics);
};

export const Practice = () => {
  const [topics, setTopics] = React.useState<Topic[]>();
  const [currentTopic, setCurrentTopic] = React.useState(0);

  React.useEffect(() => {
    console.log('useeffect');
    fetchTopics(setTopics);
  }, [false]);

  return (
    <Screen
      flex={1}
      pt={10}
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Card variant="primary" m={10} p={10}>
        <Text fontFamily="kalam" fontSize={2}>
          {topics ? topics[currentTopic].content : 'Loading'}
        </Text>
      </Card>
      <BottomPanel />
    </Screen>
  );
};
