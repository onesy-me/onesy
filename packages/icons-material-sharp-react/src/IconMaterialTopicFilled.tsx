import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTopicFilled = (props: IIcon) => {

  return (
    <Icon
      name='TopicFilled'

      short_name='Topic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h320l80 80h400v560H80Zm160-160h320v-80H240v80Zm0-160h480v-80H240v80Z"/>
    </Icon>
  );
};

IconMaterialTopicFilled.displayName = 'OnesyIconMaterialTopicFilled';

export default IconMaterialTopicFilled;
