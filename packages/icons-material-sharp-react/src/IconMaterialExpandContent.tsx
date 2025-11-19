import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandContent = (props: IIcon) => {

  return (
    <Icon
      name='ExpandContent'

      short_name='ExpandContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z"/>
    </Icon>
  );
};

IconMaterialExpandContent.displayName = 'OnesyIconMaterialExpandContent';

export default IconMaterialExpandContent;
