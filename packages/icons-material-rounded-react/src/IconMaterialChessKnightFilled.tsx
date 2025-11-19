import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChessKnightFilled = (props: IIcon) => {

  return (
    <Icon
      name='ChessKnightFilled'

      short_name='ChessKnight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80q-33 0-56.5-23.5T200-160v-80q0-23 12-41.5t32-29.5l196-99v-70l-139 69q-12 6-25 9t-26 3q-31 0-58.5-16T149-461q-14-27-12-57.5t19-56.5l124-185-39-58q-14-20-2-41t36-21h165q133 0 226.5 93T760-560v400q0 33-23.5 56.5T680-80H280Z"/>
    </Icon>
  );
};

IconMaterialChessKnightFilled.displayName = 'OnesyIconMaterialChessKnightFilled';

export default IconMaterialChessKnightFilled;
