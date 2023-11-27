'use client';

import { Tooltip, ActionIcon, Button } from '@mantine/core';
import { IconQuestionMark } from '@tabler/icons-react';

interface HelpProps {
    topic: string;
}

export default function HelpIcon({ topic }: HelpProps) {
    return (
      <Tooltip
        multiline
        w={220}
        withArrow
        transitionProps={{ duration: 200 }}
        label={topic}
      >
        {/* do not put a parent around Icon. Tooltip will only accept ONE child without anything nested between. You have been warned. Warning will be about hydrating? */}
        <IconQuestionMark id="helpIcon" size={15} radius="xl" color="#6F6058" stroke={3} />
      </Tooltip>
    );
}
