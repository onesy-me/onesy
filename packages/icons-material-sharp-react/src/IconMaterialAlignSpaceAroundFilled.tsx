import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAlignSpaceAroundFilled = (props: IIcon) => {

  return (
    <Icon
      name='AlignSpaceAroundFilled'

      short_name='AlignSpaceAround'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-800v-80h800v80H80Zm0 720v-80h800v80H80Zm200-520v-120h400v120H280Zm0 360v-120h400v120H280Z"/>
    </Icon>
  );
};

IconMaterialAlignSpaceAroundFilled.displayName = 'OnesyIconMaterialAlignSpaceAroundFilled';

export default IconMaterialAlignSpaceAroundFilled;
