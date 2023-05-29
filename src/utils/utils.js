import React, { useState } from 'react';

export function getUrlParams(id) {
    const searchParams = new URLSearchParams(window.location.search);
    const param = searchParams.get(id);
    return param;
}