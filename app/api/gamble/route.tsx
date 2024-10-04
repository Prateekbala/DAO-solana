import { NextResponse } from "next/server";

export async function GET() {
  const codeSnippet = `
use anchor_lang::prelude::*;

declare_id!("11111111111111111111111111111111");

#[program]
pub mod basic_template {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, data: u64) -> Result<()> {
        let my_account = &mut ctx.accounts.my_account;
        my_account.data = data;
        msg!("Initialized with data: {}", data);
        Ok(())
    }

    pub fn update(ctx: Context<Update>, new_data: u64) -> Result<()> {
        let my_account = &mut ctx.accounts.my_account;
        my_account.data = new_data;
        msg!("Updated data to: {}", new_data);
        Ok(())
    }

    pub fn read(ctx: Context<Read>) -> Result<u64> {
        let my_account = &ctx.accounts.my_account;
        msg!("Reading data: {}", my_account.data);
        Ok(my_account.data)
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8 + 8)]
    pub my_account: Account<'info, MyAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Update<'info> {
    #[account(mut)]
    pub my_account: Account<'info, MyAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
}

#[derive(Accounts)]
pub struct Read<'info> {
    pub my_account: Account<'info, MyAccount>,
}

#[account]
pub struct MyAccount {
    pub data: u64,
}
  `;

  return NextResponse.json({ code: codeSnippet });
}
