'use client';

import { Tooltip, ActionIcon } from '@mantine/core';
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
        <ActionIcon color="taupe" variant="outline" radius="xl" size="sm" aria-label="Help">
          <IconQuestionMark size={15} />
        </ActionIcon>
      </Tooltip>
    );
}
