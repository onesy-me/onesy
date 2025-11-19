import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWalletW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='WalletW100Filled'

      short_name='Wallet'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-402h640v-106H160v106Zm471 218 169-143v-47H160v75l471 115Z"/>
    </Icon>
  );
};

IconMaterialWalletW100Filled.displayName = 'OnesyIconMaterialWalletW100Filled';

export default IconMaterialWalletW100Filled;
