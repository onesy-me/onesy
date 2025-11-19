import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChessKnightFilled = (props: IIcon) => {

  return (
    <Icon
      name='ChessKnightFilled'

      short_name='ChessKnight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80v-209l240-121v-70l-139 69q-12 6-25 9t-26 3q-31 0-58.5-16T149-461q-14-27-12-57.5t19-56.5l124-185-80-120h240q133 0 226.5 93T760-560v480H200Z"/>
    </Icon>
  );
};

IconMaterialChessKnightFilled.displayName = 'OnesyIconMaterialChessKnightFilled';

export default IconMaterialChessKnightFilled;
