import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCodeBlocks = (props: IIcon) => {

  return (
    <Icon
      name='CodeBlocks'

      short_name='CodeBlocks'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m384-336 56-57-87-87 87-87-56-57-144 144 144 144Zm192 0 144-144-144-144-56 57 87 87-87 87 56 57ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialCodeBlocks.displayName = 'OnesyIconMaterialCodeBlocks';

export default IconMaterialCodeBlocks;
