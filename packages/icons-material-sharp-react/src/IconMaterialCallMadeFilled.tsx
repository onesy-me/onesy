import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallMadeFilled = (props: IIcon) => {

  return (
    <Icon
      name='CallMadeFilled'

      short_name='CallMade'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/>
    </Icon>
  );
};

IconMaterialCallMadeFilled.displayName = 'OnesyIconMaterialCallMadeFilled';

export default IconMaterialCallMadeFilled;
