import * as React from 'react';
import {Screen} from '../components/Screen';
import {Card, Text} from 'rebass';
import {BottomPanel} from '../components/BottomPanel';
import {getTopics} from '../lib/firebase';

type Topic = {
  content: string;
};

const fetchTopics = async (setTopics: (topics: Topic[]) => void) => {
  const result = await getTopics();
  const {docs} = result;
  const topics = docs.map(doc => doc.data()) as Topic[];
  setTopics(topics);
};

const nextTopic = () => {};

export const Practice = () => {
  const [topics, setTopics] = React.useState<Topic[]>();
  let [currentTopic, setCurrentTopic] = React.useState(0);

  React.useEffect(() => {
    fetchTopics(setTopics);
  }, [false]);

  const handleNextTopic = React.useCallback(
    () => setCurrentTopic(currentTopic++),
    []
  );

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
      <BottomPanel onNextTopic={handleNextTopic} />
    </Screen>
  );
};
