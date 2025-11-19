import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEqualW100 = (props: IIcon) => {

  return (
    <Icon
      name='EqualW100'

      short_name='Equal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-332v-68h536v68H212Zm0-228v-68h536v68H212Z"/>
    </Icon>
  );
};

IconMaterialEqualW100.displayName = 'OnesyIconMaterialEqualW100';

export default IconMaterialEqualW100;
