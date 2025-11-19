import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEqual = (props: IIcon) => {

  return (
    <Icon
      name='Equal'

      short_name='Equal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-120h640v120H160Zm0-280v-120h640v120H160Z"/>
    </Icon>
  );
};

IconMaterialEqual.displayName = 'OnesyIconMaterialEqual';

export default IconMaterialEqual;
