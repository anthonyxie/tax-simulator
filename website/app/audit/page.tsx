'use client';

import Link from 'next/link';
import '../../resources/stylesheet.css';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation'

export default function AuditNarrative() {
    return (
        <div id="narrativeBackground" className="flexCol">
            <div id="narrativeWrapper">
                <p id="narrativeText">
                    You took one too many risks - and the IRS has come knocking. Y, denying any knowledge
                    of the actions you took, has simply paid back his duly owed taxes; at the same time, 
                    he has filed a lawsuit against you to recover damages. You don't stand a chance against
                    his fancy lawyers, and you are forced to either declare backrupcy or give Y 30% of your
                    income until the day you die. 
                </p>
                <br></br>
                <img src='/narrativeImgs/audit.jpg' alt="red block letters saying AUDITED" />
                {/* <p id="narrativeText"></p> */}
            </div>
        </div>
    );
}
