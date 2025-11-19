import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewQuilt = (props: IIcon) => {

  return (
    <Icon
      name='ViewQuilt'

      short_name='ViewQuilt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200v-560h720v560H120Zm293-320h347v-160H413v160Zm214 240h133v-160H627v160Zm-214 0h134v-160H413v160Zm-213 0h133v-400H200v400Z"/>
    </Icon>
  );
};

IconMaterialViewQuilt.displayName = 'OnesyIconMaterialViewQuilt';

export default IconMaterialViewQuilt;
