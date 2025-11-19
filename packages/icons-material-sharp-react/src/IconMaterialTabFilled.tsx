import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabFilled = (props: IIcon) => {

  return (
    <Icon
      name='TabFilled'

      short_name='Tab'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h800v640H80Zm440-400h280v-160H520v160Z"/>
    </Icon>
  );
};

IconMaterialTabFilled.displayName = 'OnesyIconMaterialTabFilled';

export default IconMaterialTabFilled;
