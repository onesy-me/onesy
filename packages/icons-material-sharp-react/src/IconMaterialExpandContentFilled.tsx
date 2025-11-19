import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandContentFilled = (props: IIcon) => {

  return (
    <Icon
      name='ExpandContentFilled'

      short_name='ExpandContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z"/>
    </Icon>
  );
};

IconMaterialExpandContentFilled.displayName = 'OnesyIconMaterialExpandContentFilled';

export default IconMaterialExpandContentFilled;
