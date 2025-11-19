import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallMade = (props: IIcon) => {

  return (
    <Icon
      name='CallMade'

      short_name='CallMade'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/>
    </Icon>
  );
};

IconMaterialCallMade.displayName = 'OnesyIconMaterialCallMade';

export default IconMaterialCallMade;
