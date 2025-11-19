import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignSelfStretch = (props: IIcon) => {

  return (
    <Icon
      name='AlignSelfStretch'

      short_name='AlignSelfStretch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-800v-80h800v80H80Zm0 720v-80h800v80H80Zm340-180v-460h120v460H420Z"/>
    </Icon>
  );
};

IconMaterialAlignSelfStretch.displayName = 'OnesyIconMaterialAlignSelfStretch';

export default IconMaterialAlignSelfStretch;
