import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial60fps = (props: IIcon) => {

  return (
    <Icon
      name='60fps'

      short_name='60fps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-200H200q-50 0-85-35t-35-85v-320q0-50 35-85t85-35h140q25 0 42.5 17.5T400-700q0 25-17.5 42.5T340-640H200v80h120q50 0 85 35t35 85v120q0 50-35 85t-85 35ZM200-440v120h120v-120H200Zm400 120h160v-320H600v320Zm0 120q-50 0-85-35t-35-85v-320q0-50 35-85t85-35h160q50 0 85 35t35 85v320q0 50-35 85t-85 35H600Z"/>
    </Icon>
  );
};

IconMaterial60fps.displayName = 'OnesyIconMaterial60fps';

export default IconMaterial60fps;
