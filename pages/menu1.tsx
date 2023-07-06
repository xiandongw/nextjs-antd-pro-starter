import React, { useState } from 'react';
import { Button } from 'antd';

export default function App() {
  return (
    <div>
      <Button type="primary">Button</Button>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const headers = req ? req.headers : {};
  return { props: { headers } }
}