import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopic = (props: IIcon) => {

  return (
    <Icon
      name='Topic'

      short_name='Topic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v560H80Zm80-80h640v-400H447l-80-80H160v480Zm0 0v-480 480Zm80-80h320v-80H240v80Zm0-160h480v-80H240v80Z"/>
    </Icon>
  );
};

IconMaterialTopic.displayName = 'OnesyIconMaterialTopic';

export default IconMaterialTopic;
