'use client';

import { Image } from '@mantine/core';
import '../../resources/guide.css';
import Link from 'next/link';
import React from 'react';

export default function About1() {
    return (
      <>
        <div className="flexCol" id="midDiv">
          <text>You are an accountant to a new member of the 1%! a.k.a an extremely rich person.</text>
          <text>Learn how the average Joe ends up paying more in taxes than the 1% by using the techniques yourself!</text>
          <text>In each stage you will implement new tax evading strategies for your client. Your goal is for the actual taxes to end up lower than the projected taxes and to create enough liquid funds to satisfy your client.</text>
          <text>Play too risky? Get audited! Too safe? Get fired!</text>
        </div>
      </>
    );
}
