import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMapW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='MapW100Filled'

      short_name='Map'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-176-240-84-188 73v-533l188-64 240 84 188-73v536l-188 61Zm-14-34v-468l-212-74v468l212 74Z"/>
    </Icon>
  );
};

IconMaterialMapW100Filled.displayName = 'OnesyIconMaterialMapW100Filled';

export default IconMaterialMapW100Filled;
