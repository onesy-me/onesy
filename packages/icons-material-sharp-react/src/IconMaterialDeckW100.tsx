import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeckW100 = (props: IIcon) => {

  return (
    <Icon
      name='DeckW100'

      short_name='Deck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-106v-520H162l318-222 318 222H494v520h-28Zm14-548h228-456 228ZM146-106v-206l-28-154 28-4 28 156h160v208h-28v-180H174v180h-28Zm480 0v-208h160l28-156 28 4-28 154v206h-28v-180H654v180h-28ZM252-654h456L480-814 252-654Z"/>
    </Icon>
  );
};

IconMaterialDeckW100.displayName = 'OnesyIconMaterialDeckW100';

export default IconMaterialDeckW100;
