import React, { useEffect } from 'react';
import * as eva from 'eva-icons';

const Icon = ({ name, fill, size }) => {
  useEffect(() => {
    eva.replace()
  }, [])

  return <i data-eva={name} data-eva-fill={fill} data-eva-width={size} data-eva-height={size} />
}

export default Icon
