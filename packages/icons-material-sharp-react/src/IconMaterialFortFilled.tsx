import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFortFilled = (props: IIcon) => {

  return (
    <Icon
      name='FortFilled'

      short_name='Fort'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-160l80-80v-240l-80-80v-160h80v80h80v-80h80v80h80v-80h80v160l-80 80v40h240v-40l-80-80v-160h80v80h80v-80h80v80h80v-80h80v160l-80 80v240l80 80v160H560v-200H400v200H40Z"/>
    </Icon>
  );
};

IconMaterialFortFilled.displayName = 'OnesyIconMaterialFortFilled';

export default IconMaterialFortFilled;
