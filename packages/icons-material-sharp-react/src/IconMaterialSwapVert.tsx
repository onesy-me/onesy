import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwapVert = (props: IIcon) => {

  return (
    <Icon
      name='SwapVert'

      short_name='SwapVert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z"/>
    </Icon>
  );
};

IconMaterialSwapVert.displayName = 'OnesyIconMaterialSwapVert';

export default IconMaterialSwapVert;
