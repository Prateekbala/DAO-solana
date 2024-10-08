import { NextResponse } from "next/server";

export async function GET() {
  const codeSnippet = `
use anchor_lang::prelude::*;

declare_id!("11111111111111111111111111111111");

#[program]
pub mod user_account {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, name: String, balance: u64) -> Result<()> {
        let user_account = &mut ctx.accounts.user_account;
        user_account.name = name;
        user_account.balance = balance;
        msg!(
            "Initialized account with name: {}, balance: {}",
            user_account.name,
            user_account.balance
        );
        Ok(())
    }

    pub fn update_balance(ctx: Context<UpdateBalance>, new_balance: u64) -> Result<()> {
        let user_account = &mut ctx.accounts.user_account;
        user_account.balance = new_balance;
        msg!("Updated balance to: {}", user_account.balance);
        Ok(())
    }

    pub fn read_account(ctx: Context<ReadAccount>) -> Result<()> {
        let user_account = &ctx.accounts.user_account;
        msg!(
            "Reading account - Name: {}, Balance: {}",
            user_account.name,
            user_account.balance
        );
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 32 + 8)]
    pub user_account: Account<'info, UserAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdateBalance<'info> {
    #[account(mut)]
    pub user_account: Account<'info, UserAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
}

#[derive(Accounts)]
pub struct ReadAccount<'info> {
    pub user_account: Account<'info, UserAccount>,
}

#[account]
pub struct UserAccount {
    pub name: String,
    pub balance: u64,
}
  `;

  return NextResponse.json({ code: codeSnippet });
}
