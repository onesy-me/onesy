import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGoToLine = (props: IIcon) => {

  return (
    <Icon
      name='GoToLine'

      short_name='GoToLine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-680v-120h120v120H420Zm0 520v-120h120v120H420Z"/>
    </Icon>
  );
};

IconMaterialGoToLine.displayName = 'OnesyIconMaterialGoToLine';

export default IconMaterialGoToLine;
