'use client';
import { Accordion } from '@mantine/core';

export default function StocksList() {
    const groceries = [
        {
          emoji: '🍎',
          value: 'Your Stocks',
          description:
            'One stock. \n Two stocks. \n Red stocks. Blue stocks.',
        },
      ];
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples">
      {items}
    </Accordion>
  );
}