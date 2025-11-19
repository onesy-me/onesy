import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCollapseContent = (props: IIcon) => {

  return (
    <Icon
      name='CollapseContent'

      short_name='CollapseContent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z"/>
    </Icon>
  );
};

IconMaterialCollapseContent.displayName = 'OnesyIconMaterialCollapseContent';

export default IconMaterialCollapseContent;
