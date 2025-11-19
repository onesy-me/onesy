import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewQuilt = (props: IIcon) => {

  return (
    <Icon
      name='ViewQuilt'

      short_name='ViewQuilt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-400q0-33 23.5-56.5T200-760h560q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H200q-33 0-56.5-23.5T120-280Zm293-240h347v-160H413v160Zm214 240h133v-160H627v160Zm-214 0h134v-160H413v160Zm-213 0h133v-400H200v400Z"/>
    </Icon>
  );
};

IconMaterialViewQuilt.displayName = 'OnesyIconMaterialViewQuilt';

export default IconMaterialViewQuilt;
