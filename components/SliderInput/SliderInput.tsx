'use client';
import { useState } from 'react';
import { NumberInput, Slider } from '@mantine/core';
import classes from './SliderInput.module.css';

export function SliderInput() {
  const [value, setValue] = useState<number | string>(10000000);
  return (
    <div className={classes.wrapper}>
      <NumberInput
        value={value}
        onChange={setValue}
        label="Starting dollar amount"
        step={1000000}
        min={10000000}
        max={30000000}
        hideControls
        classNames={{ input: classes.input, label: classes.label }}
      />
      <Slider
        max={30000000}
        step={1000000}
        min={10000000}
        label={null}
        value={typeof value === 'string' ? 0 : value}
        onChange={setValue}
        size={2}
        className={classes.slider}
        classNames={classes}
      />
    </div>
  );
}